# analysis for outputs
library(shiny)
library(shinydashboard)
library(dplyr)
library(ggplot2)
library(readxl)
library(jsonlite)
library(data.table)

# dplyr - filter, select, arrange, mutate, summarise

# Read excel file
requests <- read_xlsx("SampleDataSet_CallCenter_Dash.xlsx", sheet = "Requests")
survey <- read_xlsx("SampleDataSet_CallCenter_Dash.xlsx", sheet = "Survey")

# average time to close
avg_time_to_close <- c(requests$`Time To Close`)
round(mean(na.rm = TRUE, avg_time_to_close), 2)

# average monthly requests from 2015
ly_requests <- filter(requests, Year == 2015)
avg_monthly_requests <- round(count(ly_requests) / 12)

# product quality from survey
product_quality <- as.numeric(c(survey$`ProductQuality 9pt act`))
round(mean(na.rm = TRUE, product_quality), 2)

# top 10 major issues bar chart data
requests$`Issue Code 1` <- as.factor(requests$`Issue Code 1`)
issues <- requests %>% group_by(requests$`Issue Code 1`) %>% tally
issues <- arrange(issues, desc(issues$n))
issues <- head(issues, 10)
issues <- data.frame(Issues=issues[,1], Count=issues[,2])

# create names vector
names <- as.character(issues[["requests$`Issue Code 1`"]])

# create count vector 
count <- c()
for (i in 1:10) {
  count <- append(count, issues$n[i])
}

# output barplot
op <- par(mar=c(5,16,4,2))
barplot(issues$n, names.arg = names, horiz = TRUE, las=2, main = "Main Issues")
rm(op)

# transform to json for c3.js
issues_json <- toJSON(issues[,1:2], pretty = TRUE)
toJSON(names, pretty = TRUE)
toJSON(issues[["n"]])
