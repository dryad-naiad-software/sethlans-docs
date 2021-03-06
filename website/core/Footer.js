/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
    docUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        const docsUrl = this.props.config.docsUrl;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        return `${baseUrl}${docsPart}${langPart}${doc}`;
    }

    pageUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + (language ? `${language}/` : '') + doc;
    }

    render() {
        return (
            <footer className="nav-footer" id="footer">
                <section className="sitemap">
                    <a href={this.props.config.baseUrl} className="nav-home">
                        {this.props.config.footerIcon && (
                            <img
                                src={this.props.config.baseUrl + this.props.config.footerIcon}
                                alt={this.props.config.title}
                                width="66"
                                height="58"
                            />
                        )}
                    </a>
                    <div>
                        <h5>Docs</h5>
                        <a href={this.docUrl('gettingsethlans')}>
                            Getting Started
                        </a>
                        <a href={this.docUrl('userguide')}>
                            User Guide
                        </a>
                        <a href={this.docUrl('api')}>
                            API Reference
                        </a>
                    </div>
                    <div>
                        <h5>Community</h5>
                        {/*<a*/}
                        {/*href="http://stackoverflow.com/questions/tagged/"*/}
                        {/*target="_blank"*/}
                        {/*rel="noreferrer noopener">*/}
                        {/*Stack Overflow*/}
                        {/*</a>*/}

                        <a
                            href="https://twitter.com/dryadandnaiad"
                            target="_blank"
                            rel="noreferrer noopener">
                            Twitter
                        </a>
                    </div>
                    <div>
                        <h5>More</h5>
                        <a href="https://www.youtube.com/channel/UCAJJNyB064n8RyWhO992eDg">Video Tutorials</a>
                        <a href="https://github.com/">GitHub</a>
                        <a
                            className="github-button"
                            href="https://github.com/dryad-naiad-software/sethlans"
                            data-icon="octicon-star"
                            data-count-href="/dryad-naiad-software/sethlans/stargazers"
                            data-show-count="true"
                            data-count-aria-label="# stargazers on GitHub"
                            aria-label="Star this project on GitHub">
                            Star
                        </a>
                    </div>
                </section>

                <section className="copyright">{this.props.config.copyright}</section>
            </footer>
        );
    }
}

module.exports = Footer;
