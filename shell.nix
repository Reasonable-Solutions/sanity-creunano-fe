with import <nixpkgs> {};
# I Should write a deriviation for the Zeit-now binary. It needs some patch-elfing.
stdenv.mkDerivation {
    name = "sanity-creuna";
    buildInputs = [
        nodePackages.prettier
        jq
        nodejs-10_x
    ];
    shellHook = ''
        export npm_config_prefix="$PWD/.npm-packages"
        export PATH="$PWD/.npm-packages/bin:$PATH"
        alias scripts='jq ".scripts" package.json'
        scripts
    '';
}
