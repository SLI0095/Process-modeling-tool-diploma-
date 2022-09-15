import MyAppBar from "../../modules/MyAppBar";
import Container from "@mui/material/Container";
import ProcessSubMenuFooter from "../../modules/Process/ProcessSubMenuFooter";
import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { red } from "@mui/material/colors";

function createData(name, t1, t2, t3, t4) {
  return { name, t1, t2, t3, t4 };
}
//TODO style table
const RTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    bgColor: red,
  },
}));

const rows = [
  createData("Role 1", "R", "-", "A", "I"),
  createData("Role 2", "-", "-", "R", "A"),
  createData("Role 3", "-", "C", "-", "-"),
  createData("Role 4", "C", "I", "-", "R"),
  createData("Role 5", "I", "-", "S", "-"),
];

export default function ProcessMatrix() {
  return (
    <>
      <MyAppBar />
      <Container sx={{ marginTop: 5, width: "50%", marginBottom: 7 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center"></TableCell>
                <TableCell align="center">Task 1</TableCell>
                <TableCell align="center">Task 2</TableCell>
                <TableCell align="center">Task 3</TableCell>
                <TableCell align="center">Task 4</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  /*sx={{ "&:last-child td, &:last-child th": { border: 0 } }}*/
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <RTableCell align="center">{row.t1}</RTableCell>
                  <TableCell align="center">{row.t2}</TableCell>
                  <TableCell align="center">{row.t3}</TableCell>
                  <TableCell align="center">{row.t4}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <ProcessSubMenuFooter state="rasci" />
    </>
  );
}
