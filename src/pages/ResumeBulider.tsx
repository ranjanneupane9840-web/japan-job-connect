import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import { useResumeStorage } from "../hooks/useResumeStroage";

import "../styles/resume.css";

export default function ResumeBuilder() {
  const { data, setData, resetData } = useResumeStorage();

  const previewRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);

  const printResume = () => {
    window.print();
  };

  const downloadPDF = async () => {
    if (!previewRef.current) return;

    setLoading(true);

    try {
      const pages =
        previewRef.current.querySelectorAll(".a4-page");

      const pdf = new jsPDF("p", "mm", "a4");

      for (let i = 0; i < pages.length; i++) {
        const canvas = await html2canvas(
          pages[i] as HTMLElement,
          {
            scale: 3,
            backgroundColor: "#ffffff",
            useCORS: true,
          }
        );

        const img = canvas.toDataURL("image/png");

        if (i > 0) pdf.addPage();

        pdf.addImage(
          img,
          "PNG",
          0,
          0,
          210,
          297
        );
      }

      const filename = `${
        data.fullName || "Resume"
      }.pdf`;

      pdf.save(filename);
    } catch (err) {
      console.error(err);
      alert("Failed to generate PDF.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}

      <header className="bg-blue-700 text-white p-4 flex justify-between items-center no-print">

        <div>

          <h1 className="text-2xl font-bold">
            Japan Job Connect
          </h1>

          <p className="text-sm">
            Japanese Resume Builder
          </p>

        </div>

        <div className="flex gap-3">

          <button
            className="bg-white text-blue-700 px-4 py-2 rounded"
            onClick={resetData}
            disabled={loading}
          >
            Reset
          </button>

          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={printResume}
            disabled={loading}
          >
            Print
          </button>

          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={downloadPDF}
            disabled={loading}
          >
            {loading
              ? "Generating..."
              : "Download PDF"}
          </button>

        </div>

      </header>

      {/* Main */}

      <main className="grid lg:grid-cols-2 gap-6 p-6">

        {/* Left */}

        <div className="bg-white rounded shadow h-[90vh] overflow-auto">

          <ResumeForm
            data={data}
            onChange={setData}
          />

        </div>

        {/* Right */}

        <div className="preview-wrapper">

          <div ref={previewRef}>

            <ResumePreview
              ref={previewRef}
              data={data}
            />

          </div>

        </div>

      </main>

    </div>
  );
}