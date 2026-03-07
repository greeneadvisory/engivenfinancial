import Link from "next/link";
import SpkDropdown from "../uielements/spk-dropdown";
import SpkBadge from "../uielements/spk-badge";

interface SpkKanbanboardProps {
    status?: 'In Progress' | 'Completed' | 'Pending';
    cardClass?: string;
    headerClass?: string;
    obj: any
}

const SpkKanbanboard: React.FC<SpkKanbanboardProps> = ({ status, cardClass, headerClass, obj }) => {
    return (
        <div className={`box ${cardClass}`} key={obj.id}>
        <div className={`box-header ${headerClass}`}>
            <div className="task-badges">
                <span className={`badge bg-${obj.idColor}/10 text-${obj.idColor}`}>{obj.taskId}</span>
                    {obj.badges.map((badge:any, index: number) => (
                        <SpkBadge  customClass={badge.badgeclass} variant={badge.badgecolor} key={index}>
                            {badge.badgetxt}
                        </SpkBadge>
                    ))}
            </div>
                <SpkDropdown Menulabel="dropdownMenuButton1" Customclass="[--placement:bottom-right] rtl:[--placement:bottom-left]"
                  CustomToggleclass="ti-btn ti-btn-sm bg-light" Icon={true} IconClass="ri-more-2-fill">
                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">View</Link></li>
                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Edit</Link></li>
                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Delete</Link></li>
                </SpkDropdown>
        </div>
        <div className="box-body">
            <h6 className="font-medium mb-1 text-[15px]">{obj.title}</h6>
            <p className="kanban-task-description">{obj.description}</p>
            <div className="kanban-box-footer">
                <SpkBadge variant={obj.color} customClass={`me-1`}>{obj.priority}</SpkBadge>
                <SpkBadge variant={status === 'In Progress' ? 'success' : 'warning'}>{obj.status}</SpkBadge>
            </div>
        </div>
        <div className="p-4 border-t border-dashed dark:border-defaultborder/10">
            <div className="flex items-center justify-between">
                <div className="avatar-list-stacked">
                    {obj.avatars.map((item: { avatar: string }, index: number) => (
                        <span key={`avatar-${obj.id}-${index}`} className="avatar avatar-sm avatar-rounded">
                            <img src={item.avatar} alt="avatar" />
                        </span>
                    ))}
                </div>
                <div>
                    <Link scroll={false} href="#!" className="me-2 text-secondary">
                        <span className="me-1"><i className="ri-thumb-up-fill align-middle font-normal"></i></span><span className="font-medium text-xs">{obj.likes}</span>
                    </Link>
                    <Link scroll={false} href="#!" className="text-info">
                        <span className="me-1"><i className="ri-message-2-line align-middle font-normal"></i></span><span className="font-medium text-xs">{obj.comments}</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SpkKanbanboard;
