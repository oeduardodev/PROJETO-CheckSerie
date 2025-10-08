import { FilterStatus } from "@/types/FilterStatus";
import { CircleDashed, CircleCheck } from "lucide-react-native";

export function StatusIcon({ status }: { status: FilterStatus }) {
  return status === FilterStatus.WATCHED ? (
    <CircleCheck size={16} color="#148bcfff" />
  ) : (
    <CircleDashed size={16} color="#aaaaaaff" />
  );
}
