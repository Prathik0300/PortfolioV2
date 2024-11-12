import { saveAs } from "file-saver";

export const downloadResume = () => {
  saveAs("/assets/PRATHIK_PUGAZHENTHI.pdf", "PRATHIK_PUGAZHENTHI_RESUME.pdf");
};
