import { TextInput as TTextInput } from "../api/textInput/TextInput";

export const TEXTINPUT_TITLE_FIELD = "id";

export const TextInputTitle = (record: TTextInput): string => {
  return record.id?.toString() || String(record.id);
};
