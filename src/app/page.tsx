import Cars from "@/components/cars/Cars";
import CarForm from "@/components/carForm/CarForm";

export default async function Home() {
  return (
    <div>
        <CarForm/>
        <Cars/>
    </div>
  );
}
