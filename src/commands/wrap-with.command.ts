import { wrapWith } from "../utils";

const testSnippet = (widget: string) => {
    return `Container(
        child: ${widget}
    ),`;
};

export const wrapWithTest = async () => wrapWith(testSnippet);

