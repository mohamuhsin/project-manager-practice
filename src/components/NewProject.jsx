import { useRef } from "react";

import Input from "./Input";

export default function NewProject() {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">
                        Cancel
                    </button>
                </li>
                <li>
                    <button
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-900"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input label="Title" ref={title} />
                <Input label="Description" textarea ref={description} />
                <Input label="Due Date" ref={dueDate} />
            </div>
        </div>
    );
}
