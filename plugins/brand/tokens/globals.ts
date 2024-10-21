import plugin from "tailwindcss/plugin";

export const globals = plugin.withOptions(() => ({ addBase, addUtilities }) => {
  addBase({
    ":root": {
       '--viewport-w': "tan(atan2(var(--w-w), 1px))",
       '--viewport-h': "tan(atan2(var(--w-h), 1px))",
    }
  });
});
