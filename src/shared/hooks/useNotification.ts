import "react-toastify/dist/ReactToastify.css";
import { toast, Id, ToastOptions } from "react-toastify";
import { ToastSuccessIcon, ToastWarningIcon } from "../assets/icon-tsx";
import { CustomToast } from "@/shared/components/CustomToast";
import { isArray } from "lodash";
import { number } from "yup";

const defaultOptions = {
  autoClose: 4500,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: 0,
  icon: true,
};

export type useNotificationProps = {
  type?: "info" | "success" | "warning" | "error" | "default";
  title?: string;
  content?: string | any;
  note?: string;
  options?: ToastOptions;
};

type useNotificationReturnType = {
  notify: ({ type, content, note, options }: useNotificationProps) => any;
};

export function useNotification(): useNotificationReturnType {
  const notify = ({
    type,
    title,
    content,
    note,
    options,
  }: useNotificationProps) => {
    const _content = CustomToast({ title, content, note });
    const _options = Object.assign(defaultOptions, options);

    switch (type) {
      case "info":
        return toast.info(_content, _options);
      case "success":
        return isArray(content)
          ? content?.map((e: any) => {
              return toast.warning(
                `${e.name} - ${e.employeeId} is not exit in resource master!`,
                {
                  ..._options,
                  icon: ToastWarningIcon,
                },
              );
            })
          : toast.success(_content, { ..._options, icon: ToastSuccessIcon });
      case "warning":
        return isArray(content)
          ? content?.map((e: string) => {
              const startIndex = e.indexOf(".") + 1;
              const endIndex = e.lastIndexOf(".");

              const indexCol = Number(e.slice(startIndex, endIndex)) + 1;
              const errorMess = e.slice(endIndex + 1);

              return toast.warning(`No ${indexCol}: ${errorMess}`, {
                ..._options,
                icon: ToastWarningIcon,
              });
            })
          : toast.success(_content, { ..._options, icon: ToastSuccessIcon });
      case "error":
        return toast.error(_content, _options);
      default:
        return toast(_content, _options);
    }
  };

  return { notify };
}
