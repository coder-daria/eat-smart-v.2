export const CHECK_DAILY = "CHECK_DAILY";

interface checkDaily {
  type: typeof CHECK_DAILY
  content: string
}

export function checkDaily(message: string):checkDaily {
  return { type: CHECK_DAILY, content: message };
}
