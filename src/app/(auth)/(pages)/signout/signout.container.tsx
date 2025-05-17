"use client";
// Vendors
import { useEffect } from "react";
// Actions
import { signOutAction } from "./actions/signout.actions";
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

const SignOutContainer = () => {
  useEffect(() => {
    const signOut = async () => {
      await signOutAction();
    };

    signOut();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cerrando sesión</CardTitle>
        <CardDescription>
          Por favor, espera mientras cerramos tu sesión
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-center">
          <LoaderCircle className="size-20 animate-spin stroke-1" />
        </div>
      </CardContent>
    </Card>
  );
};

export { SignOutContainer };
