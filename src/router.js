import { createBrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Email from "./components/Email/Email";
import LandingPage from "./components/LandingPage/LandingPage";
import Rendered from "./components/Rendered/Rendered";
import TransferList from "./components/TransferList/TransferList";
import DownloadUpload from "./components/DownloadUpload/DownloadUpload";
import Buttons from "./components/Buttons/Buttons";
import DataGridd from "./components/DataGrid/DataGrid";
import PracticeForm from "./components/PracticeForm/PracticeForm";
import BrowserWindow from "./components/BrowserWindow/BrowserWindow";
import Alerts from "./components/Alerts/Alerts";
import AccordionWidget from "./components/Accordion/AccordionWidget";
import Sliders from "./components/Slider/Sliders";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ToolTips from "./components/ToolTips/ToolTips";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ImgGen from "./components/OpenAI/ImgGen";
import StartPage from "./components/SCP.Pages/StartPage/StartPage";
import IntroductionPage from "./components/SCP.Pages/SCP.Intro/IntroductionPage";
import MainPage from "./components/SCP.Pages/SCP.MainPage/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      { path: "About", element: <AboutMe /> },
      { path: "Email", element: <Email /> },
      { path: "Rendered", element: <Rendered /> },
      { path: "Transfer-list", element: <TransferList /> },
      { path: "Upload-Download", element: <DownloadUpload /> },
      { path: "Buttons", element: <Buttons /> },
      { path: "DataGrid", element: <DataGridd /> },
      { path: "Practice-Form", element: <PracticeForm /> },
      { path: "Browser-Windows", element: <BrowserWindow /> },
      { path: "Alerts", element: <Alerts /> },
      { path: "Accordion", element: <AccordionWidget /> },
      { path: "Slider", element: <Sliders /> },
      { path: "Progress-Bar", element: <ProgressBar /> },
      { path: "Tool-Tips", element: <ToolTips /> },
      { path: "OpenAI", element: <ImgGen /> },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/SCP",
    element: <StartPage />,
  },
  {
    path: "/SCP/Introduction",
    element: <IntroductionPage />,
  },
  {
    path: "/SCP/MainPage",
    element: <MainPage />,
  },
]);
