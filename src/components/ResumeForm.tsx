import type { ChangeEvent } from "react";
import type { ResumeData } from "../types/Resume";

interface Props {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export default function ResumeForm({ data, onChange }: Props) {
  const set = <K extends keyof ResumeData>(
    key: K,
    value: ResumeData[K]
  ) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      set("photoDataUrl", reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-5 bg-white rounded-lg shadow p-6 overflow-auto h-full">

      <h2 className="text-2xl font-bold text-blue-700">
        Resume Form
      </h2>

      {/* Photo */}

      <div>

        <label className="block font-medium mb-1">
          Photo
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handlePhoto}
        />

      </div>

      {/* Full Name */}

      <div>

        <label className="block font-medium">
          Full Name
        </label>

        <input
          className="w-full border rounded p-2"
          value={data.fullName}
          onChange={(e) =>
            set("fullName", e.target.value)
          }
        />

      </div>

      {/* Kana */}

      <div>

        <label className="block font-medium">
          Furigana
        </label>

        <input
          className="w-full border rounded p-2"
          value={data.fullNameKana}
          onChange={(e) =>
            set("fullNameKana", e.target.value)
          }
        />

      </div>

      {/* Birth */}

      <div>

        <label className="block font-medium">
          Birth Date
        </label>

        <input
          type="date"
          className="w-full border rounded p-2"
          value={data.birthDate}
          onChange={(e) =>
            set("birthDate", e.target.value)
          }
        />

      </div>

      {/* Gender */}

      <div>

        <label className="block font-medium">
          Gender
        </label>

        <select
          className="w-full border rounded p-2"
          value={data.gender}
          onChange={(e) =>
            set(
              "gender",
              e.target.value as "男" | "女" | ""
            )
          }
        >
          <option value="">Select</option>
          <option value="男">Male</option>
          <option value="女">Female</option>
        </select>

      </div>

      {/* Postal */}

      <div>

        <label className="block font-medium">
          Postal Code
        </label>

        <input
          className="w-full border rounded p-2"
          value={data.postalCode}
          onChange={(e) =>
            set("postalCode", e.target.value)
          }
        />

      </div>

      {/* Address */}

      <div>

        <label className="block font-medium">
          Address
        </label>

        <textarea
          rows={3}
          className="w-full border rounded p-2"
          value={data.address}
          onChange={(e) =>
            set("address", e.target.value)
          }
        />

      </div>

      {/* Phone */}

      <div>

        <label className="block font-medium">
          Phone
        </label>

        <input
          className="w-full border rounded p-2"
          value={data.phone}
          onChange={(e) =>
            set("phone", e.target.value)
          }
        />

      </div>

      {/* Email */}

      <div>

        <label className="block font-medium">
          Email
        </label>

        <input
          type="email"
          className="w-full border rounded p-2"
          value={data.email}
          onChange={(e) =>
            set("email", e.target.value)
          }
        />

      </div>
            {/* ==============================
          Education / Work History
      ============================== */}

      <h2 className="text-xl font-bold text-blue-700 mt-6">
        Education & Work History
      </h2>

      {data.history.map((item, index) => (
        <div
          key={item.id}
          className="grid grid-cols-4 gap-2 border p-3 rounded mb-3"
        >
          <input
            type="text"
            placeholder="Year"
            className="border rounded p-2"
            value={item.year}
            onChange={(e) => {
              const history = [...data.history];
              history[index].year = e.target.value;
              set("history", history);
            }}
          />

          <input
            type="text"
            placeholder="Month"
            className="border rounded p-2"
            value={item.month}
            onChange={(e) => {
              const history = [...data.history];
              history[index].month = e.target.value;
              set("history", history);
            }}
          />

          <select
            className="border rounded p-2"
            value={item.type}
            onChange={(e) => {
              const history = [...data.history];
              history[index].type =
                e.target.value as any;
              history[index].content =
                e.target.value === "education"
                  ? "学歴"
                  : e.target.value === "work"
                  ? "職歴"
                  : "";
              set("history", history);
            }}
          >
            <option value="blank">Normal</option>
            <option value="education">Education</option>
            <option value="work">Work</option>
          </select>

          <input
            className="border rounded p-2 col-span-4"
            placeholder="Description"
            value={item.content}
            onChange={(e) => {
              const history = [...data.history];
              history[index].content = e.target.value;
              set("history", history);
            }}
          />
        </div>
      ))}

      {/* ==============================
          Licenses
      ============================== */}

      <h2 className="text-xl font-bold text-blue-700">
        Licenses
      </h2>

      {data.licenses.map((item, index) => (
        <div
          key={item.id}
          className="grid grid-cols-3 gap-2 border p-3 rounded mb-3"
        >
          <input
            placeholder="Year"
            className="border rounded p-2"
            value={item.year}
            onChange={(e) => {
              const licenses = [...data.licenses];
              licenses[index].year = e.target.value;
              set("licenses", licenses);
            }}
          />

          <input
            placeholder="Month"
            className="border rounded p-2"
            value={item.month}
            onChange={(e) => {
              const licenses = [...data.licenses];
              licenses[index].month = e.target.value;
              set("licenses", licenses);
            }}
          />

          <input
            placeholder="License"
            className="border rounded p-2"
            value={item.content}
            onChange={(e) => {
              const licenses = [...data.licenses];
              licenses[index].content = e.target.value;
              set("licenses", licenses);
            }}
          />
        </div>
      ))}

      {/* ==============================
          Motivation
      ============================== */}

      <h2 className="text-xl font-bold text-blue-700">
        Motivation
      </h2>

      <textarea
        rows={5}
        className="w-full border rounded p-2"
        value={data.motivation}
        onChange={(e) =>
          set("motivation", e.target.value)
        }
      />

      {/* ==============================
          Self PR
      ============================== */}

      <h2 className="text-xl font-bold text-blue-700">
        Self PR
      </h2>

      <textarea
        rows={5}
        className="w-full border rounded p-2"
        value={data.selfPR}
        onChange={(e) =>
          set("selfPR", e.target.value)
        }
      />

      {/* ==============================
          Strengths
      ============================== */}

      <h2 className="text-xl font-bold text-blue-700">
        Strengths
      </h2>

      <textarea
        rows={3}
        className="w-full border rounded p-2"
        value={data.strengths}
        onChange={(e) =>
          set("strengths", e.target.value)
        }
      />

      {/* ==============================
          Weaknesses
      ============================== */}

      <h2 className="text-xl font-bold text-blue-700">
        Weaknesses
      </h2>

      <textarea
        rows={3}
        className="w-full border rounded p-2"
        value={data.weaknesses}
        onChange={(e) =>
          set("weaknesses", e.target.value)
        }
      />

      {/* ==============================
          Hobbies
      ============================== */}

      <h2 className="text-xl font-bold text-blue-700">
        Hobbies
      </h2>

      <textarea
        rows={3}
        className="w-full border rounded p-2"
        value={data.hobbies}
        onChange={(e) =>
          set("hobbies", e.target.value)
        }
      />

      {/* ==============================
          Future Goals
      ============================== */}

      <h2 className="text-xl font-bold text-blue-700">
        Future Goals
      </h2>

      <textarea
        rows={5}
        className="w-full border rounded p-2"
        value={data.futureGoals}
        onChange={(e) =>
          set("futureGoals", e.target.value)
        }
      />
    </div>
    
  );
}