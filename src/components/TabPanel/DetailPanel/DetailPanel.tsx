import React from "react";
// Components
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DetailPanel = () => {
	const detailAccordion = Array.of(0, 1, 2, 3, 4).map((index) => {
			return (
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						id={index.toString()}
					>
						<Typography>Detail</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
							malesuada lacus ex, sit amet blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</Accordion>
			)
		}
	);

  return (
		<Grid container direction='column' /* sx={{ overflowY: 'scroll' }} */>
			{detailAccordion}
		</Grid>
	)
};

export default DetailPanel;
