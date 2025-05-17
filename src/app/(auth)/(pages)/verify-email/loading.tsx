// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Icons
import { LoaderCircle } from "lucide-react";

export default async function Loading() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Verificando tu correo</CardTitle>
        <CardDescription>
          Por favor, espera mientras verificamos tu dirección de correo
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-center">
          <LoaderCircle className="size-20 animate-spin stroke-1" />
        </div>
      </CardContent>
    </Card>
  );
}
