import TelegramBot, { Message } from "node-telegram-bot-api";
import { __log__ } from "../utils/log";
import { send_operation_selection } from "./operation";

export const startCommandHandler = async (
  bot: TelegramBot,
  msg: Message
): Promise<void> => {
  const chatId: number = msg.chat.id;
  __log__("Handling /start command", { chat_id: chatId });
  await send_operation_selection(bot, chatId);
};
