"use client";
// Vendors
import Spreadsheet from "react-spreadsheet";
// Components
import { Button } from "@/components/ui/button";
import { Detail } from "./components/detail/detail.component";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// Hooks
import { DoorFinishHook } from "./hooks/door-finish.hook";
// Types
import type { DoorFinishProps } from "./types/door-finish.container.types";

const DoorFinishContainer = ({ doorFinish }: DoorFinishProps) => {
  const {
    data,
    handleAddColumn,
    handleAddRow,
    handleDeleteColumn,
    handleDeleteRow,
    handleSavePrices,
    hasChanges,
    setData,
    theme,
  } = DoorFinishHook({
    doorFinish,
  });
  return (
    <div className="flex grow flex-col gap-2 overflow-hidden p-4">
      <h1 className="text-xl font-semibold">{doorFinish.name}</h1>
      <Tabs defaultValue="details" className="flex-1 gap-4 overflow-hidden">
        <TabsList className="bg-background h-10 w-full shrink-0 justify-start rounded-none border-b p-0 print:hidden">
          <TabsTrigger
            className="data-[state=active]:border-primary flex-0 rounded-none border-0 border-b-2 data-[state=active]:shadow-none"
            value="details"
          >
            Detalles
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:border-primary flex-0 rounded-none border-0 border-b-2 data-[state=active]:shadow-none"
            value="prices"
          >
            Tarifa
          </TabsTrigger>
        </TabsList>
        <TabsContent className="overflow-auto" value="details">
          <Detail doorFinish={doorFinish} />
        </TabsContent>
        <TabsContent className="flex overflow-auto" value="prices">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Button size="sm" onClick={handleAddRow}>
                Agregar fila
              </Button>
              <Button size="sm" onClick={handleAddColumn}>
                Agregar columna
              </Button>
              <Button size="sm" onClick={handleDeleteRow}>
                Eliminar fila
              </Button>
              <Button size="sm" onClick={handleDeleteColumn}>
                Eliminar columna
              </Button>
              <Button
                size="sm"
                onClick={handleSavePrices}
                disabled={!hasChanges}
              >
                Guardar
              </Button>
            </div>
            <p className="text-muted-foreground text-sm">
              La primera fila representa los altos y la primera columna los
              anchos.
            </p>
            <Spreadsheet
              className="text-sm"
              data={data}
              onChange={setData}
              darkMode={
                theme === "dark"
                  ? true
                  : theme === "system"
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                    : false
              }
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { DoorFinishContainer };
