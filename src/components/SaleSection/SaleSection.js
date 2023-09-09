import React from "react";
import Grid from "@mui/material/Grid";

const sectionStyles = {
  backgroundColor: "#f0f0f0", // Замініть на бажаний колір фону секції
  padding: "20px",
};

const bannerStyles = {
  height: "400px",
  width: "50%",
  // Додайте інші стилі за потребою
};

const SaleSection = () => {
  return (
    <section css={sectionStyles}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div css={bannerStyles}>
            <img
              src="https://smart4derma.com/wp-content/uploads/2021/12/g10.svg"
              alt="S4D"
              style={{ width: "50%", height: "100%" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div css={bannerStyles}>
            <img
              src="https://smart4derma.com/wp-content/uploads/2021/12/g10.svg"
              alt="S4D"
              style={{ width: "50%", height: "100%" }}
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default SaleSection;
