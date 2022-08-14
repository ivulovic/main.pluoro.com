export const OPEN_SOURCE_SCOPE = `openSource`;

export const createApiUrl = (controller): string => `/data/${controller.id}`;

export const enum OpenSourceScope {
  Sepa = 'sepa',
  Covid = 'covid19',
}

export const getUniqueKey = ({controller, params}) => `${controller?.id}/${params?.id}`;
