import { Select } from "antd";
interface InsuranceOptionsProps {
  setInsuranceSelected: React.Dispatch<React.SetStateAction<number>>;
}
const InsuranceOptions: React.FC<InsuranceOptionsProps> = ({
  setInsuranceSelected,
}) => {
  const optionsInsurances = [
    { value: 1, label: "Seguro de protección contra robo - 80% cubre" },
    { value: 2, label: "Seguro de salud de viaje familiar - total seguro" },
    { value: 3, label: "Seguro Cibernética: Cubre daños por seguridad" },
    { value: 4, label: "Seguro de Garantía Extendida: Cubre fallo equipo" },
    { value: 5, label: "Seguro de Asistencia en Viaje: Cubre emergencias" },
    { value: 6, label: "Seguro de Salud para Mascotas: Cubre veterinarios" },
  ];

  const handleChange = (value: number) => {
    console.log(`selected ${value}`);
    setInsuranceSelected(value);
  };

  return (
    <div className="p-5 lg:p-8">
      <p className="text-[#08A262] text-[28px] lg:text-[35px] font-bold text-center max-w-xl mx-auto">
        Tecnología Protegida para tus Compras en linea
      </p>
      <p className="text-[#A4A4A4] text-base lg:text-[20px] my-8 text-center font-bold">
        Selecciona el seguro que deseas obtener y luego procede a llenar tus
        datos del formulario
      </p>
      <div className="flex justify-center">
        <Select
          // defaultValue=""
          className="h-12  rounded-md w-full lg:w-[60%]"
          placeholder="Selecciona aqui el seguro que deseas cubrir"
          onChange={handleChange}
          options={optionsInsurances}
        />
      </div>
    </div>
  );
};

export default InsuranceOptions;
