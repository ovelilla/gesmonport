"use client";
// Vendors
import { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale/es";
// Components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
// Icons
import { X } from "lucide-react";
// Types
import type { DetailProps } from "./types/detail.component.types";

const Detail = ({ doorFamily }: DetailProps) => {
  const [selectedImage, setSelectedImage] = useState(
    doorFamily.images[0]?.url || "",
  );

  return (
    <div className="grid w-full max-w-6xl grid-cols-1 gap-6 overflow-y-auto p-4 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        {selectedImage && (
          <Dialog>
            <DialogTrigger>
              <div className="relative h-60 sm:h-72 md:h-80 lg:h-96">
                <Image
                  alt={doorFamily.name}
                  className="rounded-lg object-contain"
                  fill={true}
                  priority={true}
                  sizes="500px"
                  src={selectedImage}
                />
              </div>
            </DialogTrigger>
            <DialogContent
              className="bg-background flex max-w-full items-center justify-center gap-0 overflow-auto border-none p-0 py-0 sm:h-dvh sm:rounded-none sm:py-0"
              hideCloseButton={true}
            >
              <DialogClose asChild>
                <Button
                  size="icon"
                  className="absolute top-4 right-4 z-10 cursor-pointer"
                  variant={"outline"}
                >
                  <X className="size-5" />
                </Button>
              </DialogClose>
              <DialogTitle className="sr-only" />
              <DialogDescription className="sr-only" />
              <div className="relative h-full w-full">
                <Image
                  alt={doorFamily.name}
                  className="object-contain"
                  fill={true}
                  sizes="100vw"
                  src={selectedImage}
                />
              </div>
            </DialogContent>
          </Dialog>
        )}
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {doorFamily.images.map((image) => (
              <CarouselItem key={image.id} className="basis-1/4 pl-4">
                <button
                  className="relative h-20 w-full cursor-pointer p-4 sm:h-24 md:h-28"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <Image
                    alt="Miniatura"
                    className="rounded-lg object-contain"
                    fill={true}
                    sizes="125px"
                    src={image.url}
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <Card className="max-w-auto p-0 text-sm">
        <CardContent>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">{doorFamily.name}</h1>
            {doorFamily.description && (
              <p className="text-muted-foreground">{doorFamily.description}</p>
            )}
          </div>

          <Separator />

          <div className="flex flex-col gap-4">
            <h2 className="text-base font-semibold">Detalles</h2>
            <dl className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <dt className="font-medium">Modelos</dt>
              <dd className="whitespace-pre-line">
                {doorFamily.models && doorFamily.models.length > 0
                  ? doorFamily.models.map((m) => m.name).join(", ")
                  : "-"}
              </dd>
            </dl>
          </div>

          <Separator />

          <div className="flex flex-col gap-4">
            <h2 className="text-base font-semibold">Fechas</h2>
            <dl className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <dt className="font-medium">Creado el:</dt>
              <dd className="whitespace-pre-line">
                {format(new Date(doorFamily.createdAt), "PPP", { locale: es })}
              </dd>
              <dt className="font-semibold">Última actualización:</dt>
              <dd className="whitespace-pre-line">
                {format(new Date(doorFamily.updatedAt), "PPP", { locale: es })}
              </dd>
            </dl>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { Detail };
