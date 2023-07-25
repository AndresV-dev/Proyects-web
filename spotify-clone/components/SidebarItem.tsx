interface SidebarItemProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, onClick }: SidebarItemProps) => {
    return (
    <div
      className="sidebar-item"
      onClick={onClick}
    >
      <img alt={label} />
      <p>{label}</p>
    </div>
  );
}

export default SidebarItem;