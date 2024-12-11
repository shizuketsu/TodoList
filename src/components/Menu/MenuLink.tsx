import type { MenuLinkProps } from "../../types/props";

export default function MenuLink(props:MenuLinkProps) {
    return <li onClick={props.onClick}>{props.icon} {props.text}</li>;
}