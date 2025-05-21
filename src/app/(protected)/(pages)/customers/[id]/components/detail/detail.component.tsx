"use client";
// Components
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Types
import type { DetailProps } from "./types/detail.component.types";

const paymentMethods = [
  { id: "CASH", name: "Efectivo" },
  { id: "BANK_DRAFT_30_60", name: "Giro 30/60" },
  { id: "BANK_TRANSFER", name: "Transferencia bancaria" },
  { id: "NOT_SPECIFIED", name: "No especificado" },
];

const Detail = ({ customer }: DetailProps) => (
  <div className="flex flex-col gap-4">
    <Card className="p-0 text-sm md:p-4">
      <CardHeader>
        <CardTitle className="text-base font-semibold md:text-base">
          Contacto
        </CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <dt className="font-medium">Email</dt>
          <dd>{customer.email || "-"}</dd>
          <dt className="font-medium">Teléfono</dt>
          <dd>{customer.phone || "-"}</dd>
        </dl>
      </CardContent>
    </Card>

    <Card className="p-0 text-sm md:p-4">
      <CardHeader>
        <CardTitle className="text-base font-semibold md:text-base">
          Direcciones
        </CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <dt className="font-medium">Dirección de facturación</dt>
          <dd className="whitespace-pre-line">
            {customer.billingAddress || "-"}
          </dd>
          <dt className="font-medium">Dirección de envío</dt>
          <dd className="whitespace-pre-line">
            {customer.shippingAddress || "-"}
          </dd>
        </dl>
      </CardContent>
    </Card>

    <Card className="p-0 text-sm md:p-4">
      <CardHeader>
        <CardTitle className="text-base font-semibold md:text-base">
          Datos comerciales
        </CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <dt className="font-medium">NIF</dt>
          <dd>{customer.vatNumber || "-"}</dd>
          <dt className="font-medium">IBAN</dt>
          <dd>{customer.iban || "-"}</dd>
          <dt className="font-medium">Forma de pago</dt>
          <dd>
            {paymentMethods.find((pm) => pm.id === customer.paymentMethod)
              ?.name ?? "-"}
          </dd>
          <dt className="font-medium">Descuento puerta completa</dt>
          <dd>
            {customer.discountDoor !== null ? `${customer.discountDoor}%` : "-"}
          </dd>
          <dt className="font-medium">Descuento piezas sueltas</dt>
          <dd>
            {customer.discountParts !== null
              ? `${customer.discountParts}%`
              : "-"}
          </dd>
        </dl>
      </CardContent>
    </Card>

    <Card className="p-0 text-sm md:p-4">
      <CardHeader>
        <CardTitle className="text-base font-semibold md:text-base">
          Metadatos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <dt className="font-semibold">Notas</dt>
          <dd className="whitespace-pre-line">{customer.notes || "-"}</dd>
          <dt className="font-semibold">Creado el</dt>
          <dd>{format(new Date(customer.createdAt), "PPP", { locale: es })}</dd>
          <dt className="font-semibold">Última actualización</dt>
          <dd>{format(new Date(customer.updatedAt), "PPP", { locale: es })}</dd>
        </dl>
      </CardContent>
    </Card>
  </div>
);

export { Detail };
