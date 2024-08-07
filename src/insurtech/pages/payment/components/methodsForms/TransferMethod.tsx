import { useEffect, useState } from "react";
import { Button, Row } from "antd";
import "../../styles.css";
import CopyIcon from "../../../../../assets/svgCustoms/CopyIcon";

interface TransferMethodProps {
  loading: boolean;
  activeModal: () => void;
}

export const TransferMethod: React.FC<TransferMethodProps> = ({
  loading,
  activeModal,
}) => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos en segundos
  const accountNumber = "0123456781"; // Número de cuenta

  useEffect(() => {
    setTimeLeft(600); // Reinicia el contador a 10 minutos

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    alert("Numero de cuenta copiado");
  };

  return (
    <Row justify="center" className="mt-10">
      <div className="flex flex-col gap-y-4">
        <p className="text-[18px] text-[#ACACAC]">Transfer USD 49.80 to:</p>
        <p className="font-semibold text-[22px] text-black">
          BBVA Bank International
        </p>
        <div className="flex items-center gap-x-2">
          <p className="font-bold text-2xl text-black">{accountNumber}</p>
          <Button
            icon={<CopyIcon />}
            size="small"
            onClick={copyToClipboard}
            ghost
          />
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-[#ACACAC] text-[18px]">Expires in </p>
          <p className="text-red-600 text-[18px]">{formatTime(timeLeft)}</p>
          <p className="text-[#ACACAC] text-[18px]">minutes</p>
        </div>
      </div>

      <Row justify="center">
        <Button
          onClick={activeModal}
          disabled={loading}
          loading={loading}
          htmlType="submit"
          className="bg-[#1EA06B] text-[18px] w-full my-20 lg:py-7 py-6 lg:px-10 rounded-md text-white button lg:text-[25px]"
          size="large"
        >
          <p>Confirm Payment</p>
        </Button>
        <p className="text-[#ACACAC] text-[16px]">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </Row>
    </Row>
  );
};

export default TransferMethod;
