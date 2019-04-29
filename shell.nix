with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "sanity-creuna";
    buildInputs = [
        jq
        nodejs-10_x
    ];
    shellHook = ''
        export npm_config_prefix="$PWD/.npm-packages"
        export PATH="$PWD/.npm-packages/bin:$PATH"
        alias scripts='jq ".scripts" package.json'
    '';
}
