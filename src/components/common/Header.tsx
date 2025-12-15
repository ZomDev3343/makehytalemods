import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuViewport
} from "../ui/navigation-menu.tsx";

export default function Header() {

    return (
        <NavigationMenu viewport={true} className={"h-16"}>
            <NavigationMenuViewport>
                <NavigationMenuItem>
                    <NavigationMenuLink>ghewohghew</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuViewport>
        </NavigationMenu>
    );
}