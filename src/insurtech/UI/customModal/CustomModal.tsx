import { Modal } from "antd";

interface CustomModalProps {
  width?: number;
  centered?: boolean;
  isOpenModal: boolean;
  onCancel: () => void;
  children: React.ReactNode;
  destroyOnClose?: boolean;
  title?: string;
  className?: string;
  zIndex?: number;
  confirmLoading?: boolean;
  footer?: React.ReactNode;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  width = 600,
  centered = true,
  isOpenModal,
  onCancel,
  children,
  destroyOnClose,
  title,
  className = "",
  zIndex = 1000,
  confirmLoading = false,
  footer = null,
}) => (
  <Modal
    confirmLoading={confirmLoading}
    centered={centered}
    className={className}
    open={isOpenModal}
    onCancel={onCancel}
    footer={footer}
    width={width}
    destroyOnClose={destroyOnClose}
    title={title}
    zIndex={zIndex}
  >
    {children}
  </Modal>
);

export default CustomModal;
