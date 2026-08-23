import { tradeContentMap as sourceTradeContentMap, type TradeContent } from "./tradeContent";

function fixSnowText(text: string): string {
  return text
    .replaceAll("guaranteed 5-hour response after any snow storm", "targeted approximately 5-hour route completion under standard snowfall conditions")
    .replaceAll("5-times booking capacity", "capacity-managed priority routes")
    .replaceAll("5-times booking model", "capacity-managed route model")
    .replaceAll("5x capacity guarantees your property gets serviced", "capacity planning is designed to keep contracted properties prioritized")
    .replaceAll("our 5-hour response guarantee is exactly what it sounds like — within 5 hours of any snow storm, your property will be cleared and de-iced", "our operating target under standard snowfall conditions is approximately five hours for priority route completion; unusually heavy accumulations or continuous snowfall can extend service cycles while crews continue clearing and re-clearing contracted properties")
    .replaceAll("How does the 5-hour guarantee work in practice?", "How does the 5-hour route target work in practice?")
    .replaceAll("Our 5-hour response guarantee starts from the time a snow storm begins accumulating.", "Under standard snowfall conditions, our approximately 5-hour route target is measured from the start of active accumulation and dispatch operations.")
    .replaceAll("With 5-times booking capacity, we have more than enough crews to service every client within the 5-hour window.", "We manage route capacity so contracted properties remain the priority, while unusually heavy or continuous snowfall can extend service cycles.")
    .replaceAll("guaranteed service (5-times booking capacity)", "capacity-managed service with contracted routes prioritized")
    .replaceAll("fast response (within 5 hours of any storm)", "a targeted approximately 5-hour route cycle under standard snowfall conditions")
    .replaceAll("guaranteed 5-hour response that our competitors simply cannot match", "targeted approximately 5-hour route completion under standard snowfall conditions")
    .replaceAll("we schedule five crews for every storm event", "we deliberately protect route capacity for contracted properties")
    .replaceAll("We schedule five crews for every storm event", "We deliberately protect route capacity for contracted properties")
    .replaceAll("5-times booking", "capacity-managed routing")
    .replaceAll("5x capacity", "route-capacity planning")
    .replaceAll("5-hour response guarantee", "5-hour route target under standard snowfall conditions")
    .replaceAll("within 5 hours of any snow storm", "approximately five hours under standard snowfall conditions")
    .replaceAll("within 5 hours of any storm", "approximately five hours under standard snowfall conditions")
    .replaceAll("guarantees your property gets serviced", "is designed to keep contracted properties prioritized");
}

function sanitizeValue<T>(value: T): T {
  if (typeof value === "string") return fixSnowText(value) as T;
  if (Array.isArray(value)) return value.map(item => sanitizeValue(item)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value as Record<string, unknown>).map(([key, val]) => [key, sanitizeValue(val)])) as T;
  }
  return value;
}

const snow = sourceTradeContentMap["snow-removal"];

export const tradeContentMap: Record<string, TradeContent> = {
  ...sourceTradeContentMap,
  ...(snow ? { "snow-removal": sanitizeValue(snow) } : {}),
};
