"use server";
// Vendors
import slugify from "slugify";
// Libs
import { prisma } from "@/lib/db/prisma";
import {
  filterValidImages,
  uploadImage,
  deleteImage,
} from "@/lib/cloudinary/cloudinary";
// Schemas
import { familySchema } from "../schemas/family.schema";
// Types
import type {
  CreateFamilyProps,
  CreateFamilyReturn,
  DeleteFamilyProps,
  DeleteFamilyReturn,
  DeleteMultipleFamiliesProps,
  DeleteMultipleFamiliesReturn,
  ReadFamiliesReturn,
  UpdateFamilyProps,
  UpdateFamilyReturn,
} from "./types/families.actions.types";

const createFamily = async ({
  newImages,
  values,
}: CreateFamilyProps): Promise<CreateFamilyReturn> => {
  const validatedFields = familySchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  const slug = slugify(validatedFields.data.name, {
    lower: true,
    strict: true,
    trim: true,
  });

  const existing = await prisma.architraveFamily.findUnique({
    where: { slug },
  });

  if (existing) {
    return {
      error: "Ya existe una famila con ese nombre. Por favor, elige otro",
    };
  }

  try {
    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "architrave/families",
          reference: validatedFields.data.name,
        }),
      ),
    );

    const validImages = filterValidImages(uploadedImages);

    if (newImages && newImages.length > 0 && validImages.length === 0) {
      return {
        error: "Error al subir las imágenes. Por favor, inténtalo de nuevo",
      };
    }

    try {
      const newFamily = await prisma.architraveFamily.create({
        data: {
          ...validatedFields.data,
          slug,
          images: {
            create: validImages,
          },
        },
        include: {
          images: true,
        },
      });

      return { success: "Familia creada con éxito", family: newFamily };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al crear la familia. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear la familia. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteFamily = async ({
  id,
}: DeleteFamilyProps): Promise<DeleteFamilyReturn> => {
  try {
    const images = await prisma.architraveFamilyImage.findMany({
      where: { familyId: id },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.architraveFamily.delete({ where: { id } });
    return { success: "Familia eliminada con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar la familia. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleFamilies = async ({
  ids,
}: DeleteMultipleFamiliesProps): Promise<DeleteMultipleFamiliesReturn> => {
  try {
    const images = await prisma.architraveFamilyImage.findMany({
      where: { familyId: { in: ids } },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.architraveFamily.deleteMany({ where: { id: { in: ids } } });
    return { success: "Familias eliminadas con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar las familias. Por favor, inténtalo de nuevo",
    };
  }
};

const readFamilies = async (): Promise<ReadFamiliesReturn> => {
  try {
    const families = await prisma.architraveFamily.findMany({
      orderBy: { name: "asc" },
      include: {
        images: true,
      },
    });
    return families;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateFamily = async ({
  id,
  newImages,
  toDelete,
  values,
}: UpdateFamilyProps): Promise<UpdateFamilyReturn> => {
  const validatedFields = familySchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  const slug = slugify(validatedFields.data.name, {
    lower: true,
    strict: true,
    trim: true,
  });

  const existing = await prisma.architraveType.findUnique({
    where: { slug },
  });

  if (existing && existing.id !== id) {
    return {
      error: "Ya existe una familia con ese nombre. Por favor, elige otro",
    };
  }

  try {
    if (toDelete.length > 0) {
      const imagesToDelete = await prisma.architraveFamilyImage.findMany({
        where: { familyId: id, url: { in: toDelete } },
        select: { publicId: true },
      });

      const cloudinaryPublicIds = imagesToDelete.map((img) => img.publicId);

      await Promise.all(cloudinaryPublicIds.map(deleteImage));

      await prisma.architraveFamilyImage.deleteMany({
        where: { familyId: id, url: { in: toDelete } },
      });
    }

    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "architrave/families",
          reference: validatedFields.data.name,
        }),
      ),
    );

    const validImages = filterValidImages(uploadedImages);

    if (newImages && newImages.length > 0 && validImages.length === 0) {
      return {
        error: "Error al subir las imágenes. Por favor, inténtalo de nuevo",
      };
    }

    try {
      const updatedFamily = await prisma.architraveFamily.update({
        where: { id },
        data: {
          ...validatedFields.data,
          slug,
          images: {
            create: validImages,
          },
        },
        include: {
          images: true,
        },
      });

      return {
        success: "Familia actualizada con éxito",
        family: updatedFamily,
      };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al actualizar la familia. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar la familia. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createFamily,
  deleteFamily,
  deleteMultipleFamilies,
  readFamilies,
  updateFamily,
};
