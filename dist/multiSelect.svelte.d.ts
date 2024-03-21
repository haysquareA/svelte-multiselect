/** @typedef {typeof __propDef.props}  MultiSelectProps */
/** @typedef {typeof __propDef.events}  MultiSelectEvents */
/** @typedef {typeof __propDef.slots}  MultiSelectSlots */
export default class MultiSelect extends SvelteComponent<{
    selectableItems?: any[] | undefined;
    initialSelectedItems?: any[] | undefined;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MultiSelectProps = typeof __propDef.props;
export type MultiSelectEvents = typeof __propDef.events;
export type MultiSelectSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        selectableItems?: any[] | undefined;
        initialSelectedItems?: any[] | undefined;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
