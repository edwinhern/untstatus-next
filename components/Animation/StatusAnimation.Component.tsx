import style from "../../styles/status.module.css";

export const StatusAnimation = ({ statusColor }) => {
  return (
    <div className={style.spinnerContainer}>
      <div className={style.spinner}>
        <div style={{ background: statusColor }}></div>
        <div style={{ background: statusColor }}></div>
        <div style={{ background: statusColor }}></div>
        <div style={{ background: statusColor }}></div>
      </div>
    </div>
  );
};
