import { memo, useCallback } from "react";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

interface ExpandCollapseProps {
    isExpanded?: boolean;
    onClick?: () => void;
    display?: boolean;
}
export const ExpandCollapse: React.FC<ExpandCollapseProps> = memo(({ isExpanded = false, display = true, onClick }) => {

    const handleClick: React.MouseEventHandler<SVGElement> = useCallback(e => {
        e.stopPropagation();
        e.preventDefault();

        onClick && onClick();
    }, [onClick]);

    if (!display) return (
        <div style={{ width: 16, minWidth: 16, marginRight: 4, marginLeft: 4 }} />
    );

    if (isExpanded) return (
        <VscChevronDown
            size={16}
            onClick={handleClick}
            onMouseDown={e => e.stopPropagation()}
            style={{ width: 16, minWidth: 16, marginRight: 4, marginLeft: 4 }}
        />
    );

    return (
        <VscChevronRight
            size={16}
            onClick={handleClick}
            onMouseDown={e => e.stopPropagation()}
            style={{ width: 16, marginRight: 4, marginLeft: 4 }}
        />
    );
});
