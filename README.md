Source: https://geoportal.statistics.gov.uk/geoportal/catalog/content/filelist.page

Boundaries: Census_area_statistics_wards_(E+W)_Jan_2003_Boundaries_(Generalised_Clipped).zip

https://geoportal.statistics.gov.uk/Docs/Boundaries/Census_area_statistics_wards_(E+W)_Jan_2003_Boundaries_(Generalised_Clipped).zip

http://ben.balter.com/2013/06/26/how-to-convert-shapefiles-to-geojson-for-use-on-github/

    brew install gdal
    ID=CMWD_2011_EW_BGC
    ogr2ogr -f GeoJSON -t_srs crs:84 $ID.geojson $ID.shp

Data per ward from "Table PP04 2011 Census: Usual resident population by five year age group, wards in England and Wales (ZIP 894Kb)"
http://www.ons.gov.uk/ons/rel/census/2011-census/population-and-household-estimates-for-wards-and-output-areas-in-england-and-wales/rft-table-pp04-2011-wards-in-england-and-wales.zip
http://www.ons.gov.uk/ons/publications/re-reference-tables.html?edition=tcm%3A77-284349
