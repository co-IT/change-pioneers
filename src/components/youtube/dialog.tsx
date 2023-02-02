import { component$, Slot } from '@builder.io/qwik';
import type { DialogProps } from './dialog.props';

/** This component is about to come in qwikifiers/qwik-ui */
export const Dialog = component$((props: DialogProps) => {
  return (
    <dialog open={props.open} style="width: 70%; z-index: 50;">
        <Slot></Slot>
    </dialog>
  );
});
