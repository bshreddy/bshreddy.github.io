import { LanguagesStripData } from "apps/sections/projects/list/types";

import "styles/sections/projects/list/LanguagesStrip.scss";

type LanguagesStripProps = {
  data: LanguagesStripData
}

function LanguagesStrip({ data }: LanguagesStripProps) {
  return (
    <div className="languages-root">
      <div className="language-before"
        style={{
          backgroundColor: (data.length > 0) ? data[0].color : "white"
        }}
      ></div>
      <div className="languages"
        style={{
          backgroundColor: (data.length > 0) ? data[data.length - 1].color : "white"
        }}
      >
        {
          data.map((lang) => {
            // #TODO: Add tooltip with language name
            return (
              <div
                key={lang.id}
                className="language"
                style={{
                  height: lang.height,
                  backgroundColor: lang.color
                }}
              >
              </div>
            );
          })
        }

      </div>
      <div className="language-after"
        style={{
          backgroundColor: (data.length > 0) ? data[data.length - 1].color : "white"
        }}
      ></div>
    </div>
  );
}

export default LanguagesStrip;
