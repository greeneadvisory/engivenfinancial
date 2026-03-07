const SpkActivityCard = ({ activityCard, showTime = false, Listclass , Salesdashboard}: any) => {
  return (
      <li className={Listclass}>
        <div>
          <div>
            <div className="font-medium text-[14px]">
              {activityCard?.activityUser}
            </div>
            {showTime && (
              <span className={Salesdashboard ===true ? "text-xs activity-time":" text-[11px] text-textmuted  dark:text-textmuted/50 float-end"}>
                {activityCard?.activityTime}
              </span>
            )}
          </div>
            <span
            className="block text-textmuted dark:text-textmuted/50"
            dangerouslySetInnerHTML={{ __html: activityCard?.activityDesc }}
            />
        </div>
      </li>
  );
};

export default SpkActivityCard;
