import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import { useEffect, useState } from "react";
import config from "../../resources/config.json";
import { useParams } from "react-router";

export default function ProcessMatrix() {
  const [matrix, setMatrix] = useState([[]]);
  const { processId } = useParams();

  useEffect(() => {
    fetch(config.serverURL + "processes/" + processId + "/rasci")
      .then((res) => res.json())
      .then(
        (result) => {
          setMatrix(result);
        },
        () => {
          alert("Could not load RASCI matrix");
        }
      );
  }, [processId]);

  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <table>
          <tbody>
            {matrix.map((a, index) => {
              if (index === 0) {
                return (
                  <tr>
                    {a.map((b) => {
                      return <td className={"tableRole"}>{b}</td>;
                    })}
                  </tr>
                );
              } else {
                return (
                  <tr>
                    {a.map((b, index2) => {
                      if (index2 === 0) {
                        return <td className={"tableTask"}>{b}</td>;
                      } else {
                        return <td className={"table" + b}>{b}</td>;
                      }
                    })}
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </Container>
      <ProcessSubMenuFooter state="rasci" />
    </>
  );
}
