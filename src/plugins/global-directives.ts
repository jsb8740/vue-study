import focus from "@/directives/focus";
import color from "@/directives/color";

export default {
  install(app: any) {
    app.directive("focus", focus);
    app.directive("color", color);
  },
};
