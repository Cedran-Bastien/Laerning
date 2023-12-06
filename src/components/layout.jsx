import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [tabs] = useState([
    { name: "Learning", route: "/dashboard/learn" },
    { name: "Test your skill", route: "/dashboard/test" },
    { name: "Change Languages", route: "/" }
  ]);
  const [value, setValue] = useState(
    tabs.map((item) => item.route).indexOf(pathname),
  );

  useEffect(() => {
    setValue(tabs.map((item) => item.route).indexOf(pathname));
  }, [pathname, tabs]);

  const router = useRouter();
  const handleChange = (event, newValue) => {
    router.push(tabs[newValue].route);
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs centered value={value} onChange={handleChange}>
            {tabs.map((item) => (
              <Tab key={item.name} label={item.name} />
            ))}
          </Tabs>
        </Box>
      </Box>
      {children}
    </>
  );
}
