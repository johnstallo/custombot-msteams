FROM microsoft/dotnet:2.0.0-sdk
WORKDIR /app
COPY metrics.csproj .
RUN dotnet restore metrics.csproj

ENV ASPNETCORE_URLS http://*:80
EXPOSE 80
ENTRYPOINT ["dotnet", "out/metrics.dll"]

COPY . .
RUN dotnet publish -o out metrics.csproj
