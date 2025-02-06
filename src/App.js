import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import ScheduleJobPage from "./pages/Schedule/ScheduleJobMeeting";
import ScheduleTalent from "./pages/Schedule/ScheduleTalent";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { paths } from "./routes/routes";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["DM Sans", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path={paths.scheduleTalent} element={<ScheduleTalent />} />
            <Route path={paths.scheduleJob} element={<ScheduleJobPage />} />
          </Routes>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
