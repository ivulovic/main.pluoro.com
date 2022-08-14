// eslint-disable-next-line @typescript-eslint/no-var-requires
const flatten = require('./flatten');

export const formatTranslationMessages = (locale: string, messages: any) => {
  const flattenedMessages = flatten(messages);
  const flattenFormattedMessages = (formattedMessages, key: string) => {
    const formattedMessage = flattenedMessages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(flattenedMessages).reduce(flattenFormattedMessages, {});
};
