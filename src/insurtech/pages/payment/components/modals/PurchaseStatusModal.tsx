import CustomModal from "../../../../UI/customModal/CustomModal";
import LoadingPurchaseProcess from "./LoadingPurchaseProcess";
import SuccessPurchase from "./SuccessPurchase";

interface PurchaseStatusModalProps {
  onCancel: () => void;
  isOpenModal: boolean;
}

const PurchaseStatusModal: React.FC<PurchaseStatusModalProps> = ({
  onCancel,
  isOpenModal,
}) => {
  const isPayConfirm = false;

  const body = isPayConfirm ? <LoadingPurchaseProcess /> : <SuccessPurchase />;
  return (
    <CustomModal
      width={900}
      centered
      destroyOnClose
      onCancel={onCancel}
      isOpenModal={isOpenModal}
    >
      {body}
    </CustomModal>
  );
};

export default PurchaseStatusModal;
