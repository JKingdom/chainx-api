// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { EncodingVersions, SectionItem } from '@polkadot/params/types';
import { UncheckedRaw } from '@polkadot/primitives/extrinsic';
import { KeyringPair } from '@polkadot/util-keyring/types';
import { Extrinsics } from '../../types';

import u8aConcat from '@polkadot/util/u8a/concat';

import encode from './index';
import prefixes from './prefixes';
import encodeExtrinsic from './extrinsic';

export default function unchecked (pair: KeyringPair, index: number | BN, extrinsic: SectionItem<Extrinsics>, values: Array<any>, version: EncodingVersions = 'latest'): UncheckedRaw {
  const message = encodeExtrinsic(extrinsic, values, index, version);
  const signature = pair.sign(message);

  return u8aConcat(
    prefixes.poc3Version,
    version === 'poc-1'
      ? prefixes.none
      : prefixes.publicKey,
    pair.publicKey(),
    signature,
    message
  );
}
