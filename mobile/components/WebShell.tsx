import { Platform, View, type ViewProps } from "react-native";

type WebShellProps = ViewProps & {
  className?: string;
  /** Max content width on web (default: max-w-lg) */
  webMaxWidth?: "sm" | "md" | "lg" | "xl" | "full";
};

const maxWidthClass: Record<NonNullable<WebShellProps["webMaxWidth"]>, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full",
};

/** Centers and constrains layout on web; passthrough on native. */
export function WebShell({
  children,
  className = "",
  webMaxWidth = "lg",
  ...props
}: WebShellProps) {
  if (Platform.OS !== "web") {
    return (
      <View className={`flex-1 ${className}`} {...props}>
        {children}
      </View>
    );
  }

  return (
    <View className={`flex-1 w-full min-h-screen bg-white items-center ${className}`} {...props}>
      <View className={`flex-1 w-full ${maxWidthClass[webMaxWidth]} min-h-screen`}>{children}</View>
    </View>
  );
}
