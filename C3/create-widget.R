library(jsonlite)
library(htmlwidgets)
library(devtools)

# create package using devtools for widget
devtools::create("C3")

# create gauge widget scaffolding
scaffoldWidget("C3Gauge", edit = FALSE)

# create h-bar widget scaffolding
scaffoldWidget("C3Bar", edit = FALSE)

# install package for testing
install()

# testing
library(C3)
C3Gauge("50")