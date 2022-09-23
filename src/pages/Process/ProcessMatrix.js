import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import { useState } from "react";

export default function ProcessMatrix() {
  const [matrix, setMatrix] = useState([[]]);

  /*useEffect(() => {
    fetch(config.serverURL + "processes/" + location.state.processToEdit.id + "/rasci")
        .then(res => res.json())
        .then(
            (result) => {
              setMatrix(result);
            },
            (error) => {
              alert("Could not load RASCI matrix");
            }
        )
  }, [])*/

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
                    {a.map((b, index2) => {
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
