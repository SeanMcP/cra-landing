DIRECTORY=$(grep "REACT_APP_DIRECTORY" .env.production | cut -d "=" -f 2-)

mkdir build/$DIRECTORY/
mv build/index.html build/$DIRECTORY/index.html
cat build/landing.html | sed "s/%REACT_APP_DIRECTORY%/$DIRECTORY/g" > build/index.html
rm build/landing.html
